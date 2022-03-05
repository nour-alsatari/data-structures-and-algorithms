'use strict';

const Node = require('../linked-list/node');

describe('testing Node', () => {
    it('Can successfully instantiate an empty linked list',()=>{
        const value = 'node';
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })
});