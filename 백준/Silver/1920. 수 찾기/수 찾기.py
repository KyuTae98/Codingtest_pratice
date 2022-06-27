def binarysearch(i,nlist,f,r):
    if f>r:
        return 0
    l = (r+f)//2
    if nlist[l]>i:
        return binarysearch(i,nlist,f,l-1)
    elif nlist[l]<i:
        return binarysearch(i,nlist,l+1,r)
    else:
        return 1

n = int(input())

binlist = list(map(int,input().split()))
binlist = sorted(binlist)

m = int(input())
test = list(map(int,input().split()))

for i in test:
    result = binarysearch(i,binlist,0,len(binlist)-1)
    print(result)
