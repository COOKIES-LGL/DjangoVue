import numeral from 'numeral'; // 数字格式化工具包
import dayjs from 'dayjs'; // 日期格式化工具包

export function isMobile() {
  let res = false;
  const clientWidth = window.innerWidth;
  if (clientWidth) {
    if (clientWidth <= 864) {
      res = true;
    } else {
      res = false;
    }
  } else {
    res = false;
  }
  return res;
}

export function debounce(func: any, delay = 800) {
  let timer: NodeJS.Timeout = null;
  return function nextFunc(...args: any) {
    clearTimeout(timer);
    timer = (setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
      timer = null;
    }, delay) as unknown) as NodeJS.Timeout;
  };
}

export function throttle(func: any, wait = 800) {
  let timeout: NodeJS.Timeout = null;
  return function nextFunc(...args: any[]) {
    if (!timeout) {
      timeout = (setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, wait) as unknown) as NodeJS.Timeout;
    }
  };
}

export function formatNumber(
  input: string | number,
  format: string = '0,0',
): string {
  if (!input) {
    return '0';
  }
  return numeral(input).format(format);
}

export function formatDate(
  date?: dayjs.ConfigType,
  format: string = 'YYYY-MM-DD HH:mm:ss',
): string {
  if (!date) {
    return '-';
  }
  if (typeof date === 'number') {
    date = date.toString().length === 10 ? date * 1000 : date;
  } else if (typeof date === 'string') {
    date = date.length === 10 ? parseInt(date, 10) * 1000 : date;
  }
  return dayjs(date).format(format);
}
