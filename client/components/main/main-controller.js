class MainController {

    constructor($scope, $mdDialog) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        /**
         *  Change below code with the object received from server
         *  json object must have fields: 1) exportTypes , 2) readingTypes , 3) sensors , 4) date {minDate, maxDate}
         */
        const currDate = new Date();
        const startDate = new Date(
            currDate.getFullYear(),
            currDate.getMonth()-2,
            currDate.getDate()
        );
        const endDate = new Date(
            currDate.getFullYear(),
            currDate.getMonth()+1,
            currDate.getDate()
        );
        this.testObj = {
            exportTypes : ['CSV', 'TypeArray'],
            readingTypes : ['ph3', 'temp', 'hum', 'gas', 'w/e'],
            sensors : ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '151', '166', '381', '500'],
            date: {
                startDate : startDate,
                endDate : endDate
            }
        };
        /*** ******************** ***/
        //Auto open dialog
        const options = this.createDialog(event);
        this.$mdDialog.show(options);
    }

    createDialog() {
        return ({
            parent: angular.element(document.body),
            templateUrl: 'templates/dialog',
            clickOutsideToClose: true,
            escapeToClose: true,
            controller: DialogController,
            controllerAs: 'vm',
            locals: {
                object: this.testObj
            }
        });
    }

    openDialog() {
        const options = this.createDialog();
        this.$mdDialog.show(options);
    }
}

MainController.$inject = ['$scope', '$mdDialog'];
