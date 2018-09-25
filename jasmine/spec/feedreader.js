/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('each feed has a URL defined and not empty', function() {
            for (let myfeed of allFeeds){
                expect(myfeed.url).toBeDefined();
                expect(myfeed.url.length).not.toBe(0);
            }
            
         });

        it('each feed has a name defined and not empty', function() {
            for (let myfeed of allFeeds){
                expect(myfeed.name).toBeDefined();
                expect(myfeed.name.length).not.toBe(0);
            }
            
         });
    });


    describe('The Menu', function() {
        const menuIcon = $('.menu-icon-link');

         it('is hidden by default', function() {
            // expect($('.menu-hidden').is(':visible')).toBe(true);
            expect($('body').attr('class')).toMatch('menu-hidden');
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('could be clicked to change its visibility', function() {
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    describe('Initail Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // Find the entry element within the .feed container is not empty.
        it('initialized elements => .entry within .feed container is not empty', function(){
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });
    });


    describe('New Feed Selection', function() {

         let preFeed,
             newFeed;

         beforeEach(function(done) {
            loadFeed(0, function() {
                preFeed = $('.feed').find('.entry').children('h2')[0].textContent;
                loadFeed(1, function(){
                    newFeed = $('.feed').find('.entry').children('h2')[1].textContent;
                done();
                });
            });
            
        });


        it('checking new feed is loaded and content changed', function() {
            expect(newFeed).not.toMatch(preFeed);
        });
    });

}());
