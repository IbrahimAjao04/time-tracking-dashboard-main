const day = document.querySelector('#days')
const mainDiv = document.querySelector('.work')
const url = 'data.json';
day.addEventListener('click', dailyData);

function dailyData() {
    fetch(url)
        .then(res => res.json())
        .then(data => addStoreData(data))
        .catch((error) => {
            console.error(error)
        })
        }

function addStoreData(data){
    console.log(data);
    const ul = document.createElement('ul');
    console.log(ul);
    mainDiv.append(ul);
    console.log(mainDiv);
    data.forEach((ele,ind) =>{
        console.log(ele);
        const li = document.createElement('li');
        li.textContent = `${ind + 1}. ${ele.title}`;
        ul.append(li);
    })
}


const cars = [{
    "title": "Work",
    "timeframes": {
        "daily": {
            "current": 5,
            "previous": 7
        },
        "weekly": {
            "current": 32,
            "previous": 36
        },
        "monthly": {
            "current": 103,
            "previous": 128
        }
    }
},  {
    "title": "Play",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 2
        },
        "weekly": {
            "current": 10,
            "previous": 8
        },
        "monthly": {
            "current": 23,
            "previous": 29
        }
    }
},  {
    "title": "Study",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 7
        },
        "monthly": {
            "current": 13,
            "previous": 19
        }
    }
},  {
    "title": "Exercise",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 5
        },
        "monthly": {
            "current": 11,
            "previous": 18
        }
    }
}, {
    "title": "Social",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 3
        },
        "weekly": {
            "current": 5,
            "previous": 10
        },
        "monthly": {
            "current": 21,
            "previous": 23
        }
    }
},  {
    "title": "Self Care",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 2,
            "previous": 2
        },
        "monthly": {
            "current": 7,
            "previous": 11
        }
    }
}];
document.getElementById("demo").innerHTML = cars;
cars.addEventListener('click', cars);




    // const btn = document.querySelector('#btn');
    // const main = document.querySelector('.container');
    // const url = 'data.json';
    // btn.addEventListener('click', reqData);
    //
    // function reqData() {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => adder(data))
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }
    //
    // function adder(data) {
    //     console.log(data);
    //     const ul = document.createElement('ul');
    //     main.append(ul);
    //     data.forEach((ele, ind) => {
    //         console.log(ele);
    //         const li = document.createElement('li');
    //         li.textContent = `${ind + 1}. ${ele.title}`;
    //         ul.append(li);
    //     })
    // }
