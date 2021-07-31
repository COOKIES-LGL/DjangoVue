let suportWebkitLineClamp: boolean;
const bodyStyle = document.body.style;
if (bodyStyle.webkitLineClamp !== undefined && bodyStyle.webkitBoxOrient !== undefined) {
  suportWebkitLineClamp = true;
} else {
  suportWebkitLineClamp = false;
}

const getStyle = (el: HTMLElement) => {
  const style = window.getComputedStyle(el);
  return (attr: any) => {
    let val: number | string = style[attr];
    if (val.indexOf('px') > -1) {
      val = Number(val.replace('px', ''));
    }
    return val;
  };
};

const webkitLineClamp = (el: HTMLElement, lineClamp: number) => {
  el.style.display = '-webkit-box';
  el.style.webkitBoxOrient = 'vertical';
  el.style.overflow = 'hidden';
  el.style.webkitLineClamp = lineClamp.toString();
  el.style.wordBreak = 'break-word';
};

const webkitLineClampPolyfill = (el: HTMLElement, text: string, lineClamp: number) => {
  const afterText = '...';
  const style = getStyle(el);
  const fontSize: number = style('fontSize') as number;
  // lineHeight 返回的值可能为'normal', normal对应的数值不固定，故强制设为fontSize*1.2
  const lineHeight: number = style('lineHeight') === 'normal' ? fontSize * 1.2 : (style('lineHeight') as number);
  const height = lineHeight * lineClamp;
  // 当节点里面文字的长度未达到需要省略时
  if (style('height') <= height) {
    return;
  }
  el.classList.add('webkitLineClampPolyfillWrap');
  el.style.lineHeight = `${lineHeight}px`;
  el.style.height = `${height}px`;
  el.style.overflow = 'hidden';
  el.innerHTML = `
    <div class="webkitLineClampPolyfillBefore"></div>
    <div class="webkitLineClampPolyfillText">
      ${text}
    </div>
    <div
      class="webkitLineClampPolyfillAfter"
      style="height:${lineHeight}px;
             line-height:${lineHeight}px;
             width:${afterText.length * fontSize}px;
             margin-left:-${afterText.length * fontSize}px;
             word-break: break-word;"
      >${afterText}</div>
  `;
};

export const lineClampParams = {
  mounted: (el: HTMLElement, binding: any): void => {
    const lineClamp = binding.value;
    if (isNaN(lineClamp)) {
      console.error('v-line-clamp error: lineClamp only receive number');
      return;
    }
    if (suportWebkitLineClamp) {
      webkitLineClamp(el, lineClamp);
    } else {
      const text = el.innerHTML;
      webkitLineClampPolyfill(el, text, lineClamp);
    }
  },
};
