a,b,c = map(int,input().split())
n=0
if b<c:
    r = c-b
    print(int(a/r)+1)
else:
    print(-1)
