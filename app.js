(
    function () {
      'use strict';
        angular.module('LunchCheck',[])
        .controller('LunchCheckController', LunchCheckController );
        LunchCheckController.$inject = ['$scope'];
        function LunchCheckController($scope) {
            $scope.items = '';
            $scope.message = '';

            $scope.itemsCheck = function (){
                let arrayOfItems = $scope.items.split(',');
                let counter = 0;

                arrayOfItems.forEach((item) => {
                    if (item != false) {
                        counter++;
                    }
                });

                if (counter > 0 && counter < 4){
                    $scope.message = 'Enjoy!';
                }else if(counter >= 4){
                    $scope.message = 'Too much!';
                }else{
                    $scope.message = 'Please enter data first';
                }
            }
        }

    }
)();
