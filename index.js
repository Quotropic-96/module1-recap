/// Iteration 2: getMaxNum

function getMaxNum(numArr) {
    filteredNumArr = numArr.filter((elem) => typeof elem === 'number');
    return filteredNumArr.reduce((maxNum, val) => {
        if (val > maxNum) {
            maxNum = val;
        }
        return maxNum;
    },0);
}

// Iteration 2 tests:
// console.log(getMaxNum([45, 67, 12, 34])) // Should return 67
// console.log(getMaxNum(['hello', [0, 1, 2], 34, 45, 12, 0])) // Should return 45




/// Iteration 3: changeItem

function changeItem(arr, targetNum, newNum) {
    return arr.map((elem) => {
        if (elem === targetNum) {
            return newNum;
        }
        return elem;
    })
}


// Iteration 3 tests:
// console.log(changeItem([3, 5, 7], 3, 4)) // Should return [4,5,7]
// console.log(changeItem([17, 18, 6, 18, 3], 18, 2)) // Should return [17, 2, 6, 2, 3];
// console.log(changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8)) // Should return [8, 8, 3, 2, 4, 8, 8] 




/// Iteration 4: orderByDate

function orderByDate(arrOfObjects) {
    return arrOfObjects.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        if (a.year === b.year) {
            return 1;
        }
    });
}

// Iteration 4 tests:
 const birthdays = [
   {
     name: 'Bob',
     year: 1989,
   },
   {
     name: 'Rosita',
     year: 1990,
   },
   {
     name: 'Stevie',
     year: 1988,
   },
   {
     name: 'Marlon',
     year: 1979,
   },
 ]
 const importantDates = [
   {
     title: 'Wedding aniversary',
     year: 2014,
   },
   {
     name: "Daddy's birthday",
     year: 2013,
   },
   {
     name: 'Graduation party',
     year: 2019,
   }
 ]
// console.log(orderByDate(birthdays)); // Should return them ordered 1979, 1988, 1989, 1990
// console.log(orderByDate(importantDates)); // Should return them ordered 2013, 2014, 2019




/// Iteration 5: new machine gun

class Weapon {
    constructor(type, power, ammo = 10) {
        this.type = type;
        this.power = power;
        this.ammo = ammo;
        this.shootIntervalId = undefined;
    }
    shoot() {
        this.shootIntervalId = setInterval(() => {
            this.ammo--;
            console.log(`Current ammo after shoot: ${this.ammo}`);
        }, 30);
    }
    stopShooting() {
        clearInterval(this.shootIntervalId);
        console.log(`Stop shooting`);
    }
    reload(extraAmmo) {
        setTimeout(() => {
            this.ammo += extraAmmo;
            console.log(`Current ammo after reload: ${this.ammo}`);
        }, 2000);
    }
}

// Iteration 5 tests
const machineGun = new Weapon('Machine gun', 90, 50);
console.log('Begin:')
machineGun.shoot();
setTimeout(() => machineGun.stopShooting(), 1000);
setTimeout(() => machineGun.reload(35), 1500);


