var vm=new Vue(
  {
    el:'#weather',
    data:{
      weatherLists:[],
  },
    created:function(){
      var self=this;
      $.ajax({
        type: 'GET',
        dataType:'json',
        url: '../../history/yearlyweather?time='+ new Date().getTime(),
        success: function(data){
            self.weatherLists=data;
      },
      error:function(){
        alert("获取失败");
      }
    })
    }
  })
