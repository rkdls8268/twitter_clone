// A React hook to print warnings if Web Vitals are above best practice thresholds.
// Web vitals: 웹 브라우저가 웹페이지를 표시할 때 걸리는 시간을 상세하게 나눈 지표

// CLS: 광고가 많거나 콘텐츠 위치가 동적으로 바뀌는 경우 사용자 경험에 좋지 않은 영향을 끼치게 된다.
// LCP: 웹페이지에서 가장 큰 컨텐츠를 표시하는데 걸린 시간
// FID: 웹페이지 반응성에 대한 지표. 링크나 버튼을 클릭했을 때 이벤트가 시작되는데 걸리는 시간

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
