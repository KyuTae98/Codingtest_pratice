test = int(input())

for i in range(test):
    c=1
    n,m = map(int,input().split())
    queue = list(map(int,input().split()))
    nlist = list(range(n))
    while m!=nlist[0] or queue[0]!=max(queue):
        if queue[0]==max(queue):
            queue.pop(0)
            nlist.pop(0)
            c+=1
        else:
            queue.append(queue.pop(0))
            nlist.append(nlist.pop(0))
    print(c)
    
        
