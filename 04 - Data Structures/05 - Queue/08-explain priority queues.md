8. Explain priority queues and their applications.
   A queue is a linear data structure that follows the FIFO (First In, First Out) principle, meaning the first element added is the first one removed. However, in some cases, not all elements follow this rule. Instead, certain elements have higher priority, meaning they are processed first, even if they arrive later.

   A priority queue is a specialized queue where elements are dequeued based on their priority rather than their arrival order. It is often implemented using heaps, which allow efficient access to the highest-priority element.

   Applications of Priority Queues
   Priority queues are widely used in real-world applications and computing:

   Hospital Emergency Rooms
   Patients with severe conditions or critical injuries are treated first, regardless of their arrival time.

   Task Scheduling
   Time-sensitive tasks, such as system processes, I/O operations, or critical applications, receive higher priority and are executed first.

   Job Scheduling
   In computing, tasks assigned to the CPU are scheduled based on priority, ensuring important jobs run before lower-priority ones.

   Event-Driven Simulations

   In JavaScript event loops, there are two queues: the task queue and the microtask queue. The microtask queue has higher priority and executes first.

   In operating systems, certain processes are given higher priority, such as running a program with "Run as Administrator" in Windows.

   Dijkstra's Algorithm
   This algorithm finds the shortest path from a source node to all other nodes in a graph. A priority queue efficiently selects the next node with the smallest tentative distance.

   Prim's Algorithm
   Used to find the Minimum Spanning Tree (MST) in a weighted, undirected graph, a priority queue helps select the next edge with the smallest weight.

   A Search Algorithm*
   A* is used in pathfinding and graph traversal (e.g., in games or GPS systems). It combines Dijkstra’s algorithm and greedy search, using a priority queue to select the most promising node.

   Heap Sort
   This sorting algorithm uses a binary heap (a type of priority queue) to sort elements efficiently by repeatedly extracting the smallest or largest element.
