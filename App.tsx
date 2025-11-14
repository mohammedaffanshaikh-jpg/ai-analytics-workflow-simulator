import React, { useState, useMemo, useEffect } from 'react';
import { useCases, useCaseCategories } from './data';
import { COLORS } from './constants';
import type { UseCase, Node as FlowchartNode, NodeType } from './types';

// --- SVG Icons --- //
const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);
const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const ClassifierIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 12L4 12"></path><path d="M20 6L4 6"></path><path d="M20 18L4 18"></path><path d="M12 20L12 4"></path>
    </svg>
);
const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);
const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);
const ChartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
);
const MonitorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
);

const NODE_INFO: { [key in NodeType]: { bg: string; border: string; icon: React.FC<{ className?: string }> } } = {
  user: { bg: COLORS.softWarmYellow, border: '#FFD77A', icon: UserIcon },
  classifier: { bg: COLORS.warmPeach, border: '#FFC0A3', icon: ClassifierIcon },
  sql: { bg: COLORS.softBlushPink, border: '#FFC4C1', icon: DatabaseIcon },
  python: { bg: COLORS.calmBeige, border: '#EADDAF', icon: CodeIcon },
  output: { bg: COLORS.softWarmYellow, border: '#FFD77A', icon: ChartIcon },
  monitor: { bg: COLORS.warmPeach, border: '#FFC0A3', icon: MonitorIcon },
};

// --- UI Components --- //

const UseCaseSelector: React.FC<{ onSelect: (useCase: UseCase) => void }> = ({ onSelect }) => (
  <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
    <header className="text-center mb-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-warm-brown-text">Business Intelligence Workflows</h1>
      <p className="mt-4 text-lg text-warm-brown-text/80 max-w-3xl mx-auto">
        Explore interactive, step-by-step guides for common analytics and data science use cases. Select a workflow to begin.
      </p>
    </header>
    <div className="space-y-8">
      {useCaseCategories.map(category => (
        <section key={category}>
          <h2 className="text-2xl font-bold text-warm-brown-text mb-4 pb-2 border-b-2 border-warm-peach/50">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.filter(uc => uc.category === category).map(uc => (
              <button
                key={uc.id}
                onClick={() => onSelect(uc)}
                className="group text-left p-4 bg-white/60 rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm-peach border border-transparent hover:border-warm-peach/50"
              >
                <h3 className="font-semibold text-warm-brown-text">{uc.title}</h3>
                <p className="text-sm text-warm-brown-text/70 mt-1">View Workflow &rarr;</p>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);

const WorkflowStepper: React.FC<{ nodes: FlowchartNode[], activeNodeId: string, onSelectNode: (nodeId: string) => void }> = ({ nodes, activeNodeId, onSelectNode }) => (
  <div className="w-full overflow-x-auto pb-4">
    <div className="relative flex items-center justify-between min-w-max mx-auto px-4" role="tablist" aria-orientation="horizontal">
      {nodes.map((node, index) => (
        <React.Fragment key={node.id}>
          <button
            onClick={() => onSelectNode(node.id)}
            className={`flex flex-col items-center text-center transition-all duration-300 focus:outline-none ${activeNodeId === node.id ? 'text-warm-brown-text' : 'text-warm-brown-text/50 hover:text-warm-brown-text'}`}
            role="tab"
            aria-selected={activeNodeId === node.id}
            aria-controls={`step-panel-${node.id}`}
            id={`step-tab-${node.id}`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${activeNodeId === node.id ? `bg-[${NODE_INFO[node.type].bg}] border-[${NODE_INFO[node.type].border}] scale-110 shadow-lg` : `bg-white/80 border-neutral-graph-lines/50 group-hover:border-[${NODE_INFO[node.type].border}]`}`}>
              {React.createElement(NODE_INFO[node.type].icon, { className: "w-6 h-6" })}
            </div>
            <span className={`mt-2 text-xs font-semibold w-24 ${activeNodeId === node.id ? 'font-bold' : ''}`}>{node.label}</span>
          </button>
          {index < nodes.length - 1 && (
            <div className="flex-1 h-0.5 bg-neutral-graph-lines/40 mx-2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);


const StepDetail: React.FC<{ node: FlowchartNode | null }> = ({ node }) => {
  if (!node) return null;

  return (
    <div key={node.id} className="fade-in" role="tabpanel" id={`step-panel-${node.id}`} aria-labelledby={`step-tab-${node.id}`}>
        <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 bg-[${NODE_INFO[node.type].bg}] border-[${NODE_INFO[node.type].border}]`}>
                {React.createElement(NODE_INFO[node.type].icon, { className: "w-7 h-7 text-warm-brown-text" })}
            </div>
            <div>
                <h3 className="text-2xl font-bold text-warm-brown-text">{node.label}</h3>
                <p className="text-warm-brown-text/80">{node.short_hint}</p>
            </div>
        </div>
        <div className="prose prose-lg max-w-none text-warm-brown-text/90 leading-relaxed">
            <p>{node.detailed_explanation}</p>
        </div>
    </div>
  );
};

const WorkflowView: React.FC<{ useCase: UseCase, onBack: () => void }> = ({ useCase, onBack }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>(useCase.flowchartSpec.nodes[0].id);

  useEffect(() => {
    // Reset to the first step when the use case changes
    setActiveNodeId(useCase.flowchartSpec.nodes[0].id);
  }, [useCase]);
  
  const activeNodeIndex = useMemo(() => useCase.flowchartSpec.nodes.findIndex(n => n.id === activeNodeId), [useCase, activeNodeId]);
  const activeNode = useCase.flowchartSpec.nodes[activeNodeIndex];

  const handleSelectNode = (nodeId: string) => setActiveNodeId(nodeId);
  const handleNext = () => {
    if (activeNodeIndex < useCase.flowchartSpec.nodes.length - 1) {
      setActiveNodeId(useCase.flowchartSpec.nodes[activeNodeIndex + 1].id);
    }
  };
  const handlePrev = () => {
    if (activeNodeIndex > 0) {
      setActiveNodeId(useCase.flowchartSpec.nodes[activeNodeIndex - 1].id);
    }
  };
  
  return (
      <div className="min-h-screen flex flex-col p-4 sm:p-6">
          <header className="w-full max-w-5xl mx-auto flex justify-between items-center mb-6">
              <button
                  onClick={onBack}
                  className="px-4 py-2 bg-white/50 text-warm-brown-text rounded-lg hover:bg-warm-peach transition-all shadow-sm border border-warm-peach/30"
              >
                  &larr; Back to Use Cases
              </button>
              <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 bg-warm-peach text-warm-brown-text font-medium rounded-lg shadow-sm hover:bg-opacity-80 transition-all border border-warm-peach/50">
                      <DownloadIcon className="w-5 h-5" />
                      Download
                  </button>
              </div>
          </header>

          <main className="flex-grow flex flex-col items-center">
              <div className="w-full max-w-5xl mx-auto">
                  <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-warm-brown-text">{useCase.title}</h2>
                  </div>
                  
                  <section className="mb-10">
                      <WorkflowStepper nodes={useCase.flowchartSpec.nodes} activeNodeId={activeNodeId} onSelectNode={handleSelectNode} />
                  </section>

                  <section className="w-full max-w-3xl mx-auto bg-white/70 p-8 rounded-2xl shadow-lg border border-warm-peach/30">
                      <StepDetail node={activeNode} />
                  </section>

                  <footer className="w-full max-w-3xl mx-auto mt-8 flex justify-between items-center">
                      <button
                          onClick={handlePrev}
                          disabled={activeNodeIndex === 0}
                          className="px-6 py-3 bg-white/70 rounded-lg shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-calm-beig transition-all border border-warm-peach/30"
                      >
                          Previous
                      </button>
                      <button
                          onClick={handleNext}
                          disabled={activeNodeIndex === useCase.flowchartSpec.nodes.length - 1}
                          className="px-6 py-3 bg-soft-warm-yellow rounded-lg shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-opacity-80 transition-all border border-warm-peach"
                      >
                          Next Step
                      </button>
                  </footer>
              </div>
          </main>
      </div>
  );
};


// --- Main App Component --- //

export default function App() {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);

  return (
    <div className="min-h-screen">
      {!selectedUseCase ? (
        <UseCaseSelector onSelect={setSelectedUseCase} />
      ) : (
        <WorkflowView useCase={selectedUseCase} onBack={() => setSelectedUseCase(null)} />
      )}
    </div>
  );
}