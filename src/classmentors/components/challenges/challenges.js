/**
 * Created by AMOS on 10/7/16.
 */


//TODO: Add various imports for challenge(s)
import * as mcq from './mcq/mcq.js';


//TODO: Add config for routing to various challenges
export function configRoute($routeProvider, routes){
    $routeProvider
        .when(routes.viewMcq, {
            template: mcq.newMcqTmpl,
            controller: mcq.viewCtrl,
            controllerAs: 'ctrl'
            // resolve: {
            //     initialData:
            // }
        })

        .when(routes.editMcq, {
            template: mcq.editMcqTmpl,
            controller: mcq.EditCtrl,
            controllerAs: 'ctrl'
            // resolve: {
            //     initialData:
            // }
        });

}

configRoute.$inject = ['$routeProvider', 'routes'];

//TODO: Clarify what should and should not be a component
// export const component = {
//
// }

