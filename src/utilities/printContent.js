
// https://stackoverflow.com/a/19155629
export const printContent = content => {

  const newIframe = document.createElement('iframe');
  newIframe.width = '0';
  newIframe.height = '0';
  newIframe.src = 'about:blank';
  document.body.appendChild(newIframe);

  newIframe.contentWindow.contents = content;
  newIframe.src = 'javascript:window["contents"]';

  newIframe.focus();
  newIframe.onload = function() {
    newIframe.contentWindow.print();
  };
  return;

};
