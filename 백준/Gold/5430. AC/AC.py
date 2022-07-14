from collections import deque

test = int(input())

for i in range(test):
    AC = input()
    n = int(input())
    queue_data = input()[1:-1].split(',')
    queue = deque(queue_data)
    if n==0:
        queue=[]
    f=0
    l=1
    for i in AC:
        if i=='R':
            if l==1:
                l=0
            else:
                l=1
        elif i=='D':
            try:
                if l==1:
                    queue.popleft()
                else:
                    queue.pop()
            except:
                print("error")
                f=1
                break
    else:
        if f==0 and l==1:
            print("[" + ",".join(queue) + "]")
        elif f==0 and l==0:
            queue.reverse()
            print("[" + ",".join(queue) + "]")
