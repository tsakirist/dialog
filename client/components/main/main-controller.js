class MainController {

    constructor($scope, $mdDialog) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        const currDate = new Date();
        const minDate = new Date(
            currDate.getFullYear(),
            currDate.getMonth()-2,
            currDate.getDate()
        );
        const maxDate = new Date(
            currDate.getFullYear(),
            currDate.getMonth()+1,
            currDate.getDate()
        );
        this.testObj = {
            exportTypes : ['CSV', 'TypeArray'],
            types : ['1', '2', '3', '4', '5'],
            sensors : ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144'],
            date: {
                minDate: minDate,
                maxDate: maxDate
            }
        };
        //Auto open dialog
        //const options = this.createDialog(event);
        //this.$mdDialog.show(options);
    }

    createDialog(event) {
        return ({
            parent: angular.element(document.body),
            templateUrl: 'templates/dialog',
            targetEvent: event,
            clickOutsideToClose: true,
            escapeToClose: true,
            controller: DialogController,
            controllerAs: 'vm',
            locals: {
                object: this.testObj
            }
        });
    }

    openDialog(event) {
        const options = this.createDialog(event);
        this.$mdDialog.show(options);
    }
}

MainController.$inject = ['$scope', '$mdDialog'];