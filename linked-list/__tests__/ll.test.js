'use strict';

const LinkedList = require('../ll');

describe('testing linked list', () => {
    it('Can properly insert into the linked list',()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })

    it('The head property will properly point to the first node in the linked list', () => {
        const ll = new LinkedList();
        // expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();    
    })
});

