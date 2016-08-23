class MainController {

    constructor($scope, $mdDialog) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
    }

    createDialog(event) {
        return ({
            controller: DialogController,
            templateUrl: 'templates/dialog',
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            controllerAs: 'vm'
        });
    }

    openDialog(event) {
        const options = this.createDialog(event);
        this.$mdDialog.show(options);
    }
}

MainController.$inject = ['$scope', '$mdDialog'];