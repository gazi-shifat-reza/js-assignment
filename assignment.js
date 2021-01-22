// https://github.com/gazi-shifat-reza/js-assignment



// Problem - kilometerToMeter 

function kilometerToMeter(kilometer){

    if(kilometer < 0){
        console.log("Error!! Distance can't be negative");
    }
    else{
        var convertToMeter = kilometer * 1000;
    }

    return convertToMeter;

}



// Problem - budgetCalculator

function budgetCalculator(quantityOfWatch, quantityOfMobile, quantityOfLaptop){
    if(quantityOfWatch < 0 || quantityOfMobile < 0 || quantityOfLaptop < 0){
        console.log("Error!! Quantity can't be negative");
    }
    else{
        totalPriceOFWatch = quantityOfWatch * 50;
        totalPriceOFMobile = quantityOfMobile * 100;
        totalPriceOFLaptop = quantityOfLaptop * 500;

        var totalCoast = totalPriceOFWatch + totalPriceOFMobile + totalPriceOFLaptop;
    }

    return totalCoast;
}



// problem - hotelCost

function hotelCost(days){
    var totalHotelCoast = 0;

    if(days <= 0){
        console.log("Error!! Put your days properly");
        totalHotelCoast = "Not found any days";
    }
    else if(days > 0 && days <= 10){
        var roomRentForTenDays = days * 100;
        totalHotelCoast = roomRentForTenDays;
    }
    else if(days > 10 && days <= 20){ 
        var firstTenDays = 10 * 100;
        var afterTenDays = (days-10) * 80;
        var roomRentForTwentyDays = firstTenDays + afterTenDays;
        totalHotelCoast = roomRentForTwentyDays;
    }
    else if(days > 20){
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var aftertwentyDays = (days-20) * 50;
        var roomRentForAfterTwentyDays = firstTenDays + secondTenDays + aftertwentyDays;
        totalHotelCoast = roomRentForAfterTwentyDays;
    }

    return totalHotelCoast;
}



// problem - megaFriend

function megaFriend(friendsName){
    var longestName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++){
        if (friendsName[i].length > longestName.length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}
