import sys

n,m = map(int,sys.stdin.readline().split())

nlist = []

def NandM():
    if len(nlist)==m:
        print(*nlist)
        
    else:
        for i in range(1,n+1):
            if i not in nlist:
                nlist.append(i)
                NandM()
                nlist.pop()
NandM()
