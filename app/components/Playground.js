'use client';

import { useState } from 'react';

const starter = String.raw`const crew = ['Ava', 'Milo', 'Zed'];
const ship = 'Aurora';

const motto = crew
  .map(member => \`\${member.toUpperCase()} ⚡️\`)
  .join(' | ');

return \`Welcome aboard \${ship}! Our crew: \${motto}\`;`;

export default function Playground() {
  const [code, setCode] = useState(starter);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(code);
      const result = fn();
      setOutput(String(result ?? '✅ Success!'));
    } catch (error) {
      setOutput(`🚨 ${error.message}`);
    }
  };

  const reset = () => {
    setCode(starter);
    setOutput('');
  };

  return (
    <section className="section" id="playground">
      <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>JavaScript Playground</h2>
      <p className="muted" style={{ marginBottom: '20px', maxWidth: '680px' }}>
        Practice ES6 in the same panel where you draft AngularJS controllers. Try arrow functions, destructuring, or
        even simulate scopes returning data to templates.
      </p>
      <div className="playground">
        <textarea value={code} onChange={event => setCode(event.target.value)} spellCheck={false} />
        <div className="playground-footer">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button type="button" onClick={runCode}>Run Code</button>
            <button
              type="button"
              onClick={reset}
              style={{ background: 'transparent', border: '1px solid rgba(91, 141, 239, 0.4)', color: 'var(--text)' }}
            >
              Reset
            </button>
          </div>
          <span className="muted" style={{ fontSize: '0.85rem' }}>
            Tip: return a string to see it below or log with `console.log` for experiments.
          </span>
        </div>
        <div className="output-pane">{output || '👩‍🚀 Awaiting mission command...'}</div>
      </div>
    </section>
  );
}
