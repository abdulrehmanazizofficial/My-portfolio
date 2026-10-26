export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  myContribution: string;
  technologies: string[];
  capabilities: string[];
  liveUrl?: string;
  repoUrl?: string;
  modelUrl?: string;
  imageUrl?: string;
  status: 'In Active Development' | 'Deployed & Live' | 'Open Weights on Hugging Face';
  highlights: string[];
}

export interface Department {
  id: string;
  number: string;
  name: string;
  specialistCount: number;
  description: string;
  leadRole: string;
  permissions: ('read_only' | 'workspace_editor' | 'executor')[];
  sampleRoles: string[];
}

export interface ExecutionMode {
  id: string;
  index: number;
  name: string;
  tag: string;
  description: string;
  humanIntervention: 'None' | 'Per-Action' | 'Final Approval' | 'Continuous Dialogue';
  permissionLevel: 'read_only' | 'workspace_editor' | 'executor';
  primaryUseCase: string;
}

export interface DagNode {
  id: string;
  label: string;
  department: string;
  role: string;
  status: 'completed' | 'active' | 'pending';
  inputs: string[];
  outputs: string[];
  verifiedResult: 'VERIFIED' | 'PARTIAL' | 'NOT TESTED';
  detail: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  tierOrStatus: string;
  year: string;
  description: string;
  category: 'Program' | 'Competition' | 'Certification';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  demonstratedIn: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  source?: string;
}
