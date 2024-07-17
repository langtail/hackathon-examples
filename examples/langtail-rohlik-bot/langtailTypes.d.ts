// Langtail types file, generated with `langtail generate-types`
// Generated at: 2024-07-17T09:17:28.754Z
// Langtail SDK Version: 0.4.5
declare module 'langtail/dist/customTypes' {
  type PromptsType = {
    "rohlik-ai": {
      "production": {
        "1": {}
      },
      "staging": {}
    },
    "qs": {
      "preview": {
        "yg1e5ao1": {},
        "h72mt2jo": {}
      }
    },
    "evals": {
      "preview": {
        "8v8uf8hd": {}
      }
    },
    "max-tokens-test": {
      "preview": {
        "l3q6nn09": {}
      }
    },
    "default-variable-value": {
      "preview": {
        "tczml6h9": {},
        "1gyxnj4y": {}
      }
    },
    "quickstart-imported-from-playground": {
      "preview": {
        "7gegkdxj": {}
      }
    },
    "quickstart": {
      "preview": {
        "s97blshz": {}
      },
      "staging": {}
    },
    "date-helper-test": {
      "preview": {
        "gq77gn6s": {},
        "vdgu8dlz": {}
      }
    },
    "app": {
      "production": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {},
        "7": {}
      },
      "preview": {
        "cc0pnnrr": {},
        "kyjh88ez": {}
      }
    },
    "demo": {
      "preview": {
        "pkdg4et0": {},
        "wbn1k9qr": {}
      }
    },
    "test-py": {
      "production": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {},
        "7": {},
        "8": {}
      }
    },
    "azuro": {
      "production": {
        "1": {}
      },
      "staging": {}
    },
    "gpt4-turbo": {
      "preview": {
        "s6eh47p6": {},
        "4optxe0j": {}
      }
    },
    "token-count-test": {
      "preview": {
        "sxwt1pv7": {},
        "nbjai4l6": {}
      }
    },
    "gg": {
      "staging": {}
    },
    "verze": {
      "preview": {
        "8scuf8e1": {},
        "drmq5oir": {},
        "uw4jb2ix": {},
        "o6hiabco": {}
      }
    },
    "function-bug": {
      "staging": {}
    },
    "long": {
      "preview": {
        "th6sjmpd": {},
        "i63fivlp": {},
        "3ecul5sf": {}
      },
      "staging": {}
    },
    "generate-curl-snippet": {
      "staging": {}
    }
  };

  export type PromptSlug = keyof PromptsType;
  export type Environment<P extends PromptSlug> = keyof PromptsType[P] | undefined;
  export type Version<P extends PromptSlug, E extends Environment<P> = undefined> = (E extends undefined ? ("production" extends keyof PromptsType[P] ? keyof PromptsType[P]["production"] : never) : keyof PromptsType[P][E]) | undefined;
}
