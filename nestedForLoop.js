  let agabaFollowers=['agaba','papa','mama','fina'];
 let danFollowers=['agaba','papa','mama','bazimya'];
 let mutualFollowers=[];

 for (let i = 0; i< agabaFollowers.length; i ++){
    console.log('this one is agabas follower ' + agabaFollowers[i]);
 }
 console.log('    ............')
    for (let j=0 ; j < danFollowers.length; j ++){
       console.log('this one is dan follower ' + danFollowers[j]); 
    }
     console.log('  ')

 for (let i = 0; i< agabaFollowers.length; i ++){
    for (let j=0 ; j < danFollowers.length; j ++){
        if (agabaFollowers[i] === danFollowers[j] ){
            console.log('there mutual followers are : ' + danFollowers[j]);
            mutualFollowers.push(danFollowers[j]);
        
             
        }
    }
 }
 console.log('   ');
  console.log('the mutual friens are :' + mutualFollowers);
    
        