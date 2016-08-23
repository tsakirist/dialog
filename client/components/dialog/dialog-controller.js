class DialogController {

    // In case we want to access some property of $scope we just assign it to this.$scope and we use it from html like {{prop}}
    constructor($scope, $mdDialog, $http) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.exportTypes = ['CSV', 'TypeArray'];
        this.types = ['1', '2', '3', '4', '5'];
        this.sensors = ['0', '1', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '233', '377'];
    }

    getSelectedExportTypes() {
        return this.selectedExportTypes;
    }

    getSelectedTypes() {
        return this.selectedTypes;
    }

    getRadio() {
        return this.radio;
    }

    hide() {
        this.$mdDialog.hide();
    }

    cancel() {
        this.$mdDialog.cancel();
    }

}

DialogController.$inject = ['$scope', '$mdDialog', '$http'];