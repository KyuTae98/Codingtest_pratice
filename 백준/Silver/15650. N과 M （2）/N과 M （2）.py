import sys

n,m = map(int,sys.stdin.readline().split())

nlist = []


def NandM(k):
    if len(nlist)==m:
        print(*nlist)
    else:
        for i in range(k,n+1):
            if i not in nlist:
                nlist.append(i)
                NandM(k+1)
                k=k+1
                nlist.pop()

NandM(1)
