import { createRef, useLayoutEffect, memo } from 'react';

interface Props {
  repo: string;
  theme: string;
}

const Comments = memo(({ repo, theme }: Props) => {
  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const utterances = document.createElement('script');

    const attributes = {
      'src': 'https://utteranc.es/client.js',
      'repo': repo,
      'issue-term': 'pathname',
      'label': 'comment',
      'theme': theme,
      'crossOrigin': 'anonymous',
      'async': 'true',
    };

    Object.entries(attributes).forEach(([ key, value ]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
  }, [ repo ]);

  useLayoutEffect(()=> {
    if (!containerRef.current) return;

    const iframe = containerRef.current.firstElementChild?.firstElementChild as HTMLIFrameElement;

    iframe?.contentWindow?.postMessage({ type: 'set-theme', theme }, 'https://utteranc.es');
  }, [ theme ]);

  return <div ref={containerRef} />;
});


export default Comments;
