class DialogController {

    constructor($scope, $mdDialog) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.exportTypes = ['CSV', 'TypeArray'];
        this.types = ['1', '2', '3', '4', '5'];
        this.sensors = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144'];
        this.selectedSensors = [];
        this.selectedTypes = [];
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
        this.dialogCancel();
        //alert(JSON.stringify(json));
        console.log(JSON.stringify(json));
    }

    hide() {
        this.$mdDialog.hide();
    }

    dialogCancel() {
        this.$mdDialog.cancel();
    }

}

DialogController.$inject = ['$scope', '$mdDialog'];