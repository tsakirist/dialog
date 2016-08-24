class DialogController {

    // Object includes the available options injected from the mainController
    constructor($scope, $mdDialog, object) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.object = object;
        console.log(this.object);
        // this.exportTypes = ['CSV', 'TypeArray'];
        // this.types = ['1', '2', '3', '4', '5'];
        // this.sensors = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144'];
        // this.selectedSensors = [];
        // this.selectedTypes = [];
        // const currDate = new Date();
        // this.minDate = new Date(
        //     currDate.getFullYear(),
        //     currDate.getMonth()-2,
        //     currDate.getDate()
        // );
        // this.maxDate = new Date(
        //     currDate.getFullYear(),
        //     currDate.getMonth()+1,
        //     currDate.getDate()
        // );
    }

    getSelectedExportType() {
        return this.selectedExportType;
    }

    getSelectedTypes() {
        return this.selectedTypes;
    }

    getRadio() {
        return this.radio;
    }

    getSelectedSensors() {
        return this.selectedSensors;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    addSensor(sensor) {
        this.selectedSensors.push(sensor);
    }

    clearTypes() {
        this.selectedTypes = undefined;
    }

    exportJson() {
        const json = {
            export: this.getSelectedExportType(),
            types : this.getSelectedTypes(),
            radio : this.getRadio()
        };
        if(this.radio === 'All') {
            json.sensors = this.sensors;
        } else {
            json.sensors = this.getSelectedSensors();
        }
        json.startDate = this.getStartDate();
        json.endDate = this.getEndDate();
        this.dialogCancel();
        console.log(JSON.stringify(json));
    }

    hide() {
        this.$mdDialog.hide();
    }

    dialogCancel() {
        this.$mdDialog.cancel();
    }

}

DialogController.$inject = ['$scope', '$mdDialog', 'object'];