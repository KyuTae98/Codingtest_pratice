N,M = map(int,input().split())

nlist = list(map(int,input().split()))
nlist.sort()
result = []
def printlist():
    if M==len(result):
        print(*result)
    else:
        for i in nlist:
            if i not in result:
                result.append(i)
                printlist()
                result.pop()
            
printlist()


