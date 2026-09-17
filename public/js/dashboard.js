/* Daily Drive — dashboard component loader.
   One-time stable loader: future dashboard HTML/CSS changes stay in dashboard files. */
(function(){
  'use strict';
  var mount=document.getElementById('dashboardMount');
  if(!mount)return;
  var xhr=new XMLHttpRequest();
  try{
    xhr.open('GET','/dashboard.html',false);
    xhr.send(null);
    if(xhr.status>=200 && xhr.status<400){
      mount.innerHTML=xhr.responseText;
    }else{
      mount.innerHTML='<div style="padding:30px;color:#b4232f;font-weight:800">Dashboard component failed to load.</div>';
    }
  }catch(e){
    console.error('Dashboard component load failed',e);
    mount.innerHTML='<div style="padding:30px;color:#b4232f;font-weight:800">Dashboard component failed to load.</div>';
  }

  // Keep the mock dashboard search field visually connected to the real table search.
  var top=document.getElementById('dashboardSearch'), real=document.getElementById('search');
  if(top && real){
    top.addEventListener('input',function(){real.value=top.value;real.dispatchEvent(new Event('input',{bubbles:true}));});
    real.addEventListener('input',function(){if(top.value!==real.value)top.value=real.value;});
  }

  // Live assignment preview.
  var count=document.getElementById('vipAssignCount');
  var target=document.getElementById('vipAssignSheet');
  var selected=document.getElementById('ddAssignSelected');
  var targetName=document.getElementById('ddAssignTargetName');
  function sync(){
    if(selected)selected.textContent=Math.max(1,Number(count&&count.value||10));
    if(targetName && target){
      var o=target.options[target.selectedIndex];
      targetName.textContent=o && o.value ? o.textContent : 'destination sheet';
    }
  }
  if(count)count.addEventListener('input',sync);
  if(target)target.addEventListener('change',sync);
  sync();
})();
