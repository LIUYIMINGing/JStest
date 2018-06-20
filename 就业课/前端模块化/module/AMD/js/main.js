require.config({ //在requireJs的配置项里配置
    baseUrl : './js/tool',//设置基础路径
    paths: {
        'jquery': 'jquery',
        'math' : 'math'
    }
})
require(['jquery', 'math'],function($, math) {
    //   ['这里其实是一个路径，指引到所要引用的文件']
    console.log($());
    console.log(math.add(1,2));
})