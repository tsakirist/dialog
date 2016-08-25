class DialogController {

    // Object includes the available options injected from the mainController
    constructor($scope, $mdDialog, object) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.object = object;
        console.log(this.object);
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

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    getStartTime() {
        return this.startTime.toTimeString();
    }

    getEndTime() {
        return this.endTime.toTimeString();
    }

    addSensor(sensor) {
        const index = this.selectedSensors.indexOf(sensor);
        if(index > -1) {
            this.selectedSensors.splice(index, 1);
        }
        else {
            this.selectedSensors.push(sensor);
        }
        console.log(this.selectedSensors.sort(function(a, b) {
            return a-b;
        }));
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
        json.date = {
            startDate: this.getStartDate(),
            endDate: this.getEndDate()
        };
        json.time = {
            startTime: this.getStartTime(),
            endTime: this.getEndTime()
        };
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
