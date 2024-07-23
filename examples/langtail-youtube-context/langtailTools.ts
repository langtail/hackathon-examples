// Langtail tools file, generated with `langtail generate-tools`
// Generated at: 2024-07-19T13:21:46.843Z
// Langtail SDK Version: 0.5.4
import { CoreTool } from 'ai'
import { z } from 'zod'

type Streamable = unknown;
type Renderer<T extends Array<any>> = (...args: T) => Streamable | Generator<Streamable, Streamable, void> | AsyncGenerator<Streamable, Streamable, void>;
interface VercelAITool<PARAMETERS extends z.ZodTypeAny = any, RESULT = any> extends CoreTool<PARAMETERS, RESULT> {
  generate?: Renderer<[
    z.infer<PARAMETERS>,
    {
      toolName: string;
      toolCallId: string;
    }
  ]>;
}

const toolsObject = {
  "social-media-post": {
    "staging": {
      "default": {
        "handle_error": {
          "description": "Function for handling encountered problems",
          "parameters": z.object({ "message": z.string().describe("A short description of the encountered problem") })
        },
        "post_proposal": {
          "description": "Function for sending proposal of social media post",
          "parameters": z.object({ "message": z.string().describe("The text of the proposed post") })
        }
      }
    }
  }
};

type ToolsType = typeof toolsObject;
type PromptSlug = keyof ToolsType;
type Environment<P extends PromptSlug> = keyof ToolsType[P];
type Version<P extends PromptSlug, E extends Environment<P>> = keyof ToolsType[P][E];

type ChatModelInterface<P extends PromptSlug, E extends Environment<P>, V extends Version<P, E>> = {
  promptId: P,
  environment: E,
  version: V
}

type ToolOverrides<P extends PromptSlug, E extends Environment<P>, V extends Version<P, E>> = {
  [K in keyof ToolsType[P][E][V]]?: ToolsType[P][E][V][K] extends { parameters: z.ZodTypeAny } ? Partial<VercelAITool<ToolsType[P][E][V][K]['parameters']>> : never
};

function tools<P extends PromptSlug, E extends Environment<P>, V extends Version<P, E>, OVERRIDES extends ToolOverrides<P, E, V>>(
  chatModel: ChatModelInterface<P, E, V>,
  toolsOverride?: OVERRIDES
): ToolsType[P][E][V] & OVERRIDES {
  const mergedTools: any = {};
  const defaultToolsObject = toolsObject[chatModel.promptId][chatModel.environment][chatModel.version] as Record<string, VercelAITool>;
  const mergedKeys = new Set([...Object.keys(defaultToolsObject), ...Object.keys(toolsOverride ?? {})]);

  for (const name of Array.from(mergedKeys.values())) {
    const defaultTool = defaultToolsObject[name];
    const override = toolsOverride ? toolsOverride[name as keyof OVERRIDES] : {};
    mergedTools[name as keyof ToolsType] = { ...defaultTool, ...override };
  }

  return mergedTools as ToolsType[P][E][V] & OVERRIDES;
}

export default tools