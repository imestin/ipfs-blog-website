/// <reference path="../../main.js" />
/// <reference path="../../meta.js" />
var mainDB = null;
var metaArray = [];



describe('Test if the database loads.', function() {
  beforeAll(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;        // Used to be 5000
    mainDB = null;
    await loadDB();
  });
  afterAll(() => {
    mainDB = null;
  })
  
  it('mainDB should not be null', () => {    
    console.log("mainDB is: ", mainDB);
    expect(mainDB).toBeTruthy();
  });
});


describe('Test if the metaArray and the articles load', () => {
  beforeAll(async () => {
    // Simulating DOM
    createDOM();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;        // Used to be 5000
    mainDB = fillDB();
    await listArticles();
  });
  

  it('metaArray should not be empty', () => {
    console.log("metaArray is: ", metaArray);
    expect(metaArray.length).toBeGreaterThan(0);
  });
  
  xit('<div> element with class "articleCard" should exist', () => {
    expect($('.articleCard').length).toBeGreaterThan(0);
  });
  
  xit('Article with title "First test" should exist', () => {
    let cardObj = $('.articleCard')[0];
    let h2 = cardObj.find('h2');
    $(h2)[0].innerText
    expect($(h2)[0].innerText).toBe("First test");
  });
  
  xit('front.jpg should load', () => {
    // Later...
  });
  
  xit('"The first test" description should exist', () => {
    
  });
  
  
  xit('Article with title "Last test" should exist', () => {
    
  });
  
  xit('Last image should load', () => {
    
  });
  
  xit('"9th article" description should exist (last card)', () => {
    
  });


});



describe('Test if clicking on a card will redirect to the correct article.', () => {
  // Test article elements here...
});



describe('Test if markdown rendering works properly.', () => {
  
  afterAll(() => {
    // Tearing down DOM
    mainDB = null;
    metaArray = null;
  });
});




function fillDB() {
  let mockDB = {
    name : "Mock Blog",
    description : "Mock data for testing",
    created : "2021-04-12",
    owner : "tester",
    helpfile_beginner : "help_beginner.md",
    helpfile_advanced : "help_advanced.html",
    articles : [
        "ipfs/QmUjJb5iy1Nf9KMTKHdRDteLDKYtJcreo9SuZQ9Uew2szc",
        "ipfs/QmNzfDnedfUq8ovfVK1sWiLNNjWRrCAMH3VjQRqVK4oQw5",
        "ipfs/QmeRRu5eMhzrdAxb8FsE8MkXbSCRotQmsjkB2seMDoz4do",
	      "ipfs/QmbF7UaCdJ5TRBJFr4BiiUZULtruX8KDvfmsge3vEqgcFU",
	      "ipfs/Qmc3PyQX7ayrudcKVqDMSTswcEjzbB31TnLzUXYLkLSPnR",
      	"ipfs/QmXrJmaFdLeMoYMXJyqfbUeuznSsGwrSLLqNgmF6PGYJVs",
	      "ipfs/QmPQVJZra1CDpfUgtCwvYeACNSoALiVxwZKMmxriqykHL6",
	      "ipfs/QmU8ZdtNkQ7BDQfejccWeDzhfNBDPi2qiqsJPZhi5S1HJk",
	      "ipfs/QmQNYt7fimvzk8sFsDdGuuzSsMooYqn9ZvKTAfsrV2DZZv",
	      "ipfs/QmUEoT1C4cjPpD9VLUX2uXYJRQsuaU8pRGw79nwLmkhTNA"
    ]
  }
  return mockDB;
}

function createDOM() {
  let mainSite = $('<div id="website">');
  let nav = $('<nav>');
  let main = $('<main id="main">');
    $(main).append('<ul id="articleList">');
  let footer = $('<footer>');
  $(mainSite).append(nav);
  $(mainSite).append(main);
  $(mainSite).append(footer);
  $(document.body).append(mainSite);    
  $('#main').css({"display": "none"})
}