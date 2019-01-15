function inverseNums(nums){
    if(isNaN(nums)){
      return false;
    }
    if (nums > 0 ){
      var newNumber = nums - (2*nums)
      return newNumber;
    }
    if(nums <= 0){
      return nums;
    }
  }
  
  console.log(inverseNums(-8))