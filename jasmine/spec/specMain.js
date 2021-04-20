/// <reference path="../../main.js" />


describe('First test suit', function() {
  beforeEach(() => {
    // Simulating DOM    
    mainSite = $('<div id="website">');
      nav = $('<nav>');
      main = $('<main id="main">');
        $(main).append('ul id="articleList"');
      footer = $('<footer>');
    $(mainSite).append(nav);
    $(mainSite).append(main);
    $(mainSite).append(footer);
    $(document.body).append(mainSite);
  });
  
  afterEach(() => {
    // Tearing down DOM
    mainSite.remove();
    mainSite = null;
  });


  it('should run the function without error', () => {
    onlyTest();
  });

  it('these will be the tests in this test suit', () => {
    5 === 5;
  });
});