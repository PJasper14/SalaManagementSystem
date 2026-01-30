/** Inline script runs before paint to prevent theme flash. No client hooks. */
export function ThemeInit() {
  const script = `(function(){
    var k='sala-theme';
    var t=typeof localStorage!='undefined'&&localStorage.getItem(k);
    var p=typeof matchMedia!='undefined'&&matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
    var v=t==='light'||t==='dark'?t:p;
    var r=document.documentElement;
    r.classList.remove('light','dark');
    r.classList.add(v);
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
