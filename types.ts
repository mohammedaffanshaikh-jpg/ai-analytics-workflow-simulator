
export type NodeType = 'user' | 'classifier' | 'sql' | 'python' | 'output' | 'monitor';

export interface Node {
  id: string;
  label: string;
  type: NodeType;
  short_hint: string;
  detailed_explanation: string;
}

export interface Edge {
  from: string;
  to: string;
}

export interface FlowchartSpec {
  title: string;
  nodes: Node[];
  edges: Edge[];
  interaction_instructions: string;
  downloadables?: string[];
}

export interface UseCase {
  id: string;
  category: string;
  title: string;
  workflow: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
  };
  flowchartSpec: FlowchartSpec;
}
