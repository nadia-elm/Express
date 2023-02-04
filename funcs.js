


function avr(arr) {
    if (arr.length === 0){
        return 0

    }else{
      let sum = 0;
      for (let i of arr) {
        sum += i;
      }
      average = sum / arr.length;
      return average;
    }

    }


    function convertAndValidateNumsArray(numsAsStrings) {
      let result = [];

      for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
          return new Error(
            `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
          );
        }

        result.push(valToNumber);
      }
      return result;
    }


    function findMedian(nums){
        nums.sort((a,b) => a-b)

        let middleIndex = Math.floor(nums.length /2);
        let median;

        if(nums.length % 2 === 0){
            median =  (nums[middleIndex] + nums[middleIndex - 1] )/2
        } else {
            median = nums[middleIndex]
        }
        return median
    }




    // function makeArrayOfNums(nums) {
    //   noCommas = nums.split(",");
    //   return (toNums = noCommas.map(function (x) {
    //     if (x != null) {
    //       return parseInt(x, 10);
    //     }
    //   }));
    // }

    module.exports ={
      avr,
      convertAndValidateNumsArray ,
      findMedian
    } 

  