import * as env from "./../src/_index";

const dbName = "dbname";
const objectStoreName = "store";

/*env.log.setDebugLevel();
env.log.logger = console;*/

describe("IDBDatabase", () => {
    beforeEach(done => {
        var request = env.indexedDB.open(dbName);      
        request.onupgradeneeded = () => {
            request.transaction.db.createObjectStore(objectStoreName);
        }
        request.onsuccess = () => {
            request.result.close();
            done();
        }  
    });
    afterEach(done => {
        env.indexedDB.deleteDatabase(dbName).promise.then(() =>done());        
    });
    afterAll(() => {
        env.indexedDB.deleteDatabase(dbName);        
    });
    /*describe("When I create a transaction", () => {
        it("should have a mode", done => {
            const request = env.indexedDB.open(dbName);
            request.onsuccess = function(event) {
                const transaction = request.result.transaction([objectStoreName]);
                expect(transaction.mode).toBe("readonly");
                request.result.close();
                done();
            };
        });
        it("should have a list with objectStoreNames", done => {
            const request = env.indexedDB.open(dbName);
            request.onsuccess = function(event) {
                const transaction = request.result.transaction([objectStoreName]);
                expect(transaction.objectStoreNames).toContain(objectStoreName);
                request.result.close();
                done();
            };
        });
        it("should have a database", done => {
            const request = env.indexedDB.open(dbName);
            request.onsuccess = function(event) {
                const transaction = request.result.transaction([objectStoreName]);
                expect(transaction.db).toBe(request.result);                
                request.result.close();
                done();
            };
        });
        describe("and completes", () => {
            it("shoul call oncomplete", done => {
                const request = env.indexedDB.open(dbName);
                request.onsuccess = function(event) {
                    const transaction = request.result.transaction([objectStoreName]);
                    transaction.oncomplete = () => {
                        expect(transaction.oncomplete).toHaveBeenCalled();
                        request.result.close();
                        done();
                    }
                    spyOn(transaction, "oncomplete");
                };
            });
            it("shoul reslove a promise", done => {
                const request = env.indexedDB.open(dbName);
                request.onsuccess = function(event) {
                    request.result.transaction([objectStoreName]).promise.then(() => {
                        expect(true).toBe(true);

                        request.result.close();
                        done();
                    });
                };
            });
        });
    });*/
});