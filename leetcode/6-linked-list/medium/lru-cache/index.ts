class ListNode {
  key: number;
  value: number;
  prev: ListNode | null;
  next: ListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, ListNode>;
  private head: ListNode;
  private tail: ListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, ListNode>();
    // head represents the most recently used node
    this.head = new ListNode(-1, -1);
    // tail represents the least recently used node
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.moveToFront(node);
      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.moveToFront(node);
    } else {
      if (this.cache.size === this.capacity) {
        this.evictLeastRecent();
      }
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this.addToFront(newNode);
    }
  }

  private moveToFront(node: ListNode): void {
    this.removeNode(node);
    this.addToFront(node);
  }

  private removeNode(node: ListNode): void {
    node.prev!.next = node.next!;
    node.next!.prev = node.prev!;
  }

  private addToFront(node: ListNode): void {
    node.next = this.head.next!;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private evictLeastRecent(): void {
    if (this.tail.prev !== this.head) {
      const lru = this.tail.prev!;
      this.removeNode(lru);
      this.cache.delete(lru.key);
    }
  }
}
