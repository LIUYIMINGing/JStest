function createStore(initState) {
    var state = initState || {};
    //list 存函数的数组
    var list = [];
    //取到初始状态
    function getState() {
        return state;
    }

    //修改state状态值
    function dispatch(action) {
        //{type:text,value:'王'}
        //{type:sex,value:'male'}
        state[action.type] = action.value;
        //执行每一个函数
        list.forEach(function(ele,index){
            ele();
        });
    }

    //订阅函数功能
    function subScribe(hander) {
        list.push(hander);
    }
    return {
        getState : getState,
        dispatch : dispatch,
        subScribe : subScribe
    }
}
// createStore();