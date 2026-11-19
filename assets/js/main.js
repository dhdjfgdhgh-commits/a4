(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var co=$('cm-o');if(co){var cb=$('cm-b');var C={neutral:{none:['Black','#1D1B1B'],black:['Taupe','#9A8A7E'],brown:['Black','#1D1B1B'],both:['Burgundy','#5B1E2D']},warm:{none:['Cognac','#8B5A2B'],black:['Cognac','#8B5A2B'],brown:['Cream','#EDE4D6'],both:['Olive','#56614A']},cool:{none:['Navy','#2D3A55'],black:['Taupe','#9A8A7E'],brown:['Navy','#2D3A55'],both:['Burgundy','#5B1E2D']},bright:{none:['Tan','#C8A27A'],black:['Tan','#C8A27A'],brown:['Cream','#EDE4D6'],both:['Taupe','#9A8A7E']}};
 on([co,cb],function(){var c=C[co.value][cb.value];$('cm-out').innerHTML='<strong><span class="bv-dot" style="background:'+c[1]+'"></span>'+c[0]+'</strong><p>'+(co.value==='bright'?'A quiet colour lets your clothes stay the focus.':cb.value==='both'?'With two neutrals covered, a rich accent adds the most new outfits.':'This works with most of what you already wear.')+'</p>';});}
var sn=$('st-n');if(sn){var ss=$('st-s');var T={shelf:'Stand bags upright with shelf dividers, each in a dust bag to block light.',ward:'Use a wardrobe shelf with clear boxes or dividers; avoid hanging bags by the handles for long.',drawer:'Keep only small bags and clutches here, laid flat and stuffed, never stacked.',boxes:'Use breathable boxes, one bag in each, and label them for easy rotation.'};
 on([sn,ss],function(){var n=Math.max(1,parseInt(sn.value,10)||1),w=Math.round(n*28);$('st-o').innerHTML='<strong>About '+(w>=100?(Math.round(w/10)/10)+' m':w+' cm')+' of shelf</strong><p>'+T[ss.value]+'</p><p>Allow roughly 25&ndash;30 cm width per medium bag.</p>';});}
var rb=$('rp-b');if(rb){var rd=$('rp-d');var D=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];on([rb,rd],function(){var b=Math.max(1,parseInt(rb.value,10)||1),d=Math.min(7,Math.max(1,parseInt(rd.value,10)||1)),per=Math.round(d/b*10)/10,plan=[];for(var i=0;i<d;i++)plan.push(D[i]+': bag '+(i%b+1));
 $('rp-o').innerHTML='<strong>'+per+' day'+(per===1?'':'s')+' per bag each week</strong><p>'+plan.join(' &middot; ')+'</p><p>'+(b===1?'With one bag, give it a rest on weekends: empty, stuff and air it.':'Each bag gets rest days to let handles and leather recover.')+'</p>';});}
})();
