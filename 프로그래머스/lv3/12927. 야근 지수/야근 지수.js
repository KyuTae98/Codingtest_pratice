function solution(n, works) {
    let queue = [0];
    let change = (arr,i,j)=>{
        let tmp = arr[i];
        arr[i]=arr[j];
        arr[j]=tmp;
    }
    let display_priority = (arr,index) =>{
        let left = index*2;
        let right = index*2+1;
        let len = arr.length;
        if(left>=len)
            return;
        if(arr[left]>arr[index]){
            change(arr,index,left)
            display_priority(arr,left);
        }
        else if(arr[right]>arr[index]){
            change(arr,index,right)
            display_priority(arr,right);
        }
    }
    let init_priority = (arr,i) =>{
        if(i===1)
            return;
        let index = Math.floor(i/2);
        if(arr[index]<arr[i]){
            change(arr,index,i);
            init_priority(arr,index)
        }
    }
    for(let i=0;i<works.length;i++){
        queue.push(works[i]);
        init_priority(queue,i+1);
    }
    while(n>0){
        if(queue[1]===0)
            return 0;
        queue[1]--;
        display_priority(queue,1);
        n--;
    }
    return queue.map(element=>element**2).reduce((sum,curr)=>sum+curr);
}
//최대힙 우선순위 큐로 만들기 