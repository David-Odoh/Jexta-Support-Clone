// Available Dictionary Enum
export class Dictionary {
    terms = [
        { id: 1, name: 'Fault Call', plural: 'Fault Calls', alias: 'fault_call', ref: 'Ticket', },
        { id: 2, name: 'Part Request', plural: 'Part Requests', alias: 'part_request', ref: 'Resource Request', },
        { id: 3, name: 'ATM Terminal', plural: 'ATM Terminals', alias: 'atm_terminal', ref: 'Help Topic' },
        { id: 4, name: 'Routine Maintenance', plural: 'Routine Maintenance', alias: 'routine_maintenance', ref: 'Schedule' },
        { id: 5, name: 'Home', plural: 'Homes', alias: 'home', ref: 'Dashboard' },
        { id: 6, name: 'Search', plural: 'Searches', alias: 'search', ref: 'Search' },
        { id: 7, name: 'User', plural: 'Users', alias: 'user', ref: 'User' },
        { id: 8, name: 'Privilege', plural: 'Privileges', alias: 'privilege', ref: 'Permission' },
        { id: 9, name: 'Setting', plural: 'Settings', alias: 'setting', ref: 'Setting' },
        { id: 10, name: 'Form', plural: 'Forms', alias: 'form', ref: 'Form' },
        { id: 11, name: 'IOU', plural: 'IOU', alias: 'iou', ref: 'IOU' },
        { id: 12, name: 'Knowledgebase', plural: 'Knowledgebase', alias: 'knowledgebase', ref: 'Knowledgebase' },
    ];

    actors = [
        { id: 1, name: 'Field Engineer', plural: 'Field Engineers', alias: 'field_engineer', ref: 'Agent' },
        { id: 2, name: 'Client', plural: 'Clients', alias: 'client', ref: 'Customer' },
        { id: 3, name: 'Store', plural: 'Store', alias: 'store', ref: 'Inventory Manager' },
        { id: 4, name: 'Account', plural: 'Account', alias: 'account', ref: 'Chief Finance Officer' },
        { id: 5, name: 'Front Desk', plural: 'Front Desk', alias: 'front_desk', ref: 'Manager Type 1' },
        { id: 6, name: 'Line Manager', plural: 'Line Manager', alias: 'line_manager', ref: 'Manager Type 2' },
        { id: 7, name: 'Admin', plural: 'Admins', alias: 'admin', ref: 'Manager Type 3' },
        { id: 8, name: 'Superadmin', plural: 'Superadmins', alias: 'superadmin', ref: 'Manager Type 4' },
    ];

    heplers = [
        { trigger: '@@es', word: 'Essential :: ' },
        { trigger: '@@d', word: 'Desirable :: ' },
        { trigger: '@@q', word: 'Qualifications  & Training :: ' },
        { trigger: '@@ex', word: 'Experience :: ' },
        { trigger: '@@c', word: 'Competencies :: ' },
    ]
}