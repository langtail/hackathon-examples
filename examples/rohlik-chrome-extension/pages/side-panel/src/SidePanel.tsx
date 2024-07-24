import '@src/SidePanel.css';
import { useStorageSuspense, withErrorBoundary, withSuspense } from '@chrome-extension-boilerplate/shared';
import { exampleThemeStorage } from '@chrome-extension-boilerplate/storage';
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';

const SidePanel = () => {
  const theme = useStorageSuspense(exampleThemeStorage);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.origin !== 'http://localhost:3000') return; // Ensure the message is from the expected origin
      console.log('Message received from iframe:', event.data);
      if (event.data.type === 'addProductToCart') {
        console.log('Adding product to cart:', event.data.product_id);
        const data = {
          quantity: 1,
          productId: event.data.product_id,
          recipeId: null,
          actionId: null,
          source: "false:Search Results"
        };
        executeScriptInCurrentTab(data);
      } else if (event.data.type === 'buyMultipleItems') {
        const data = {
          products: event.data.products,
        };
        console.log('Buying multiple items:', data);
        executeScript__BuyMultipleItems(data);
      
      } else if (event.data.type === 'searchProduct') {
        console.log('Search product:', event.data.name);
        const data = {
          product_name: event.data.name,
          number_of_products: event.data.limit,
        };
        const results = await executeScriptInCurrentTabSearch(data);
        sendMessageToIframe(results[0].result);
      } else if (event.data.type === 'changeUrl') {
        console.log('Changing URL:', event.data.url);
        chrome.tabs.update({ url: event.data.url });
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);


  const executeScript__BuyMultipleItems = (data: object ) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: async (data) => {
            const result = await fetch('https://www.rohlik.cz/api/v1/shopping-lists/cart/all', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            })

            window.location.reload()

            return result
          },
          args: [data],
        });
      }
    });
  };

  const executeScriptInCurrentTab = (data: object ) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: async (data) => {
            const result = await fetch('https://www.rohlik.cz/services/frontend-service/v2/cart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            })

            window.location.reload()

            return result
          },
          args: [data],
        });
      }
    });
  };

  const executeScriptInCurrentTabSearch = async (data: object ) => {
    console.log("executeScriptInCurrentTabSearch", data)
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tabs[0].id) {
      return await chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: async (data) => {
          const resp = await fetch(`https://www.rohlik.cz/services/frontend-service/search-metadata?search=${data.product_name}&offset=0&limit=${data.number_of_products}&companyId=1&canCorrect=true`)
          const respJson = await resp.json()
          
          return JSON.stringify(respJson.data.productList
            .filter((product: any) => product.inStock)
            .map((product: any) => ({
              inStock: product.inStock,
              productId: product.productId,
              productName: product.productName,
              price: product.price,
              pricePerUnit: product.pricePerUnit,
              imgPath: product.imgPath,
              baseLink: product.baseLink,
              coo: product.coo,
              textualAmount: product.textualAmount,
              unit: product.unit,
              composition: product.composition,
            })))
        },
        args: [data],
      });
    }
  };

  const sendMessageToIframe = (data: string) => {
    console.log('Sending message to iframe:', data);
    iframeRef.current?.contentWindow?.postMessage({
      data: data,
      type: 'searchResults',
    }, 'http://localhost:3000');
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === 'light' ? '#eee' : '#222',
      }}>
      <iframe
        ref={iframeRef}
        src="http://localhost:3000/"
        title="iframe"
        width="100%"
        height="100%"
      ></iframe>
      {/* <button onClick={sendMessageToIframe}>Send Message to Iframe</button> */}
    </div>
  );
};

// const ToggleButton = (props: ComponentPropsWithoutRef<'button'>) => {
//   // ToggleButton implementation
// };

export default SidePanel;
