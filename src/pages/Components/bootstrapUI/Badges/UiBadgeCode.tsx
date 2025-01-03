import PrismCode from "Common/Prisam";

// Default Badges

const defaultBadgesCode =
`
<Badge bg='primary'>Primary</Badge>

<Badge bg='secondary'>Secondary</Badge>

<Badge bg='success'>Success</Badge>

<Badge bg='info'>Info</Badge>

<Badge bg='warning'>Warning</Badge>

<Badge bg='danger'>Danger</Badge>

<Badge bg='dark'>Dark</Badge>

<Badge bg='light' className="text-body>Light</Badge>

`;

const DefaultBadgesExample = () => (
    <PrismCode
        code={defaultBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Soft Badges

const softBadgesCode =
    `
<span className="badge bg-primary-subtle">Primary</span>

<span className="badge bg-secondary-subtle">Secondary</span>

<span className="badge bg-success-subtle">Success</span>

<span className="badge bg-info-subtle">Info</span>

<span className="badge bg-warning-subtle">Warning</span>

<span className="badge bg-danger-subtle">Danger</span>

<span className="badge bg-dark-subtle">Dark</span>

<span className="badge bg-light-subtle text-body">Light</span>
`;

const SoftBadgesExample = () => (
    <PrismCode
        code={softBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Outline Badges

const outlineBadgesCode =
    `
    <span className="badge bg-body-secondary border border-primary text-primary">Primary</span>

    <span className="badge bg-body-secondary border border-secondary text-secondary">Secondary</span>

    <span className="badge bg-body-secondary border border-success text-success">Success</span>

    <span className="badge bg-body-secondary border border-info text-info">Info</span>

    <span className="badge bg-body-secondary border border-warning text-warning">Warning</span>

    <span className="badge bg-body-secondary border border-danger text-danger">Danger</span>

    <span className="badge bg-body-secondary border border-dark text-dark">Dark</span>

    <span className="badge bg-body-secondary border border-light text-light text-body">Light</span> 
`;

const OutlineBadgesExample = () => (
    <PrismCode
        code={outlineBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Rounded Pill Badges

const roundedPillBadgesCode =
    `
<Badge bg="primary" pill> Primary </Badge>

<Badge bg="secondary" pill> Secondary </Badge>

<Badge bg="success" pill> Success </Badge>

<Badge bg="info" pill> Info </Badge>

<Badge bg="warning" pill> Warning </Badge>

<Badge bg="danger" pill> Danger </Badge>

<Badge bg="dark" pill> Dark </Badge>

<Badge bg="light" className="text-dark" pill> Light </Badge>

`;

const RoundedPillBadgesExample = () => (
    <PrismCode
        code={roundedPillBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Label Badges

const labelPillBadgesCode =
`
<Badge bg='primary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Primary</Badge>

<Badge bg='secondary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Secondary</Badge>

<Badge bg='success' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Success</Badge>

<Badge bg='danger' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Danger</Badge>

<Badge bg='warning' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Warning</Badge>

<Badge bg='info' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Info</Badge>

<Badge bg='dark' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Dark</Badge>

<Badge bg='light' className="badge-label text-dark"> <i className="mdi mdi-circle-medium"></i> Light</Badge>
`;

const LabelBadgesExample = () => (
    <PrismCode
        code={labelPillBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Example of the badge used in the HTML Heading

const htmlBadgesCode =
`
<h1>Example heading <Badge bg="secondary">New</Badge></h1>

<h2>Example heading <Badge bg="secondary">New</Badge></h2>

<h3>Example heading <Badge bg="secondary">New</Badge></h3>

<h4>Example heading <Badge bg="secondary">New</Badge></h4>

<h5>Example heading <Badge bg="secondary">New</Badge></h5>

`;

const HTMLBadgesExample = () => (
    <PrismCode
        code={htmlBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Rounded Pill Badges with soft effect

const roundSoftBadgesCode =
    `
<span className="badge rounded-pill bg-primary-subtle text-primary">Primary</span>

<span className="badge rounded-pill bg-secondary-subtle text-secondary">Secondary</span>

<span className="badge rounded-pill bg-success-subtle text-success">Success</span>

<span className="badge rounded-pill bg-info-subtle text-info">Info</span>

<span className="badge rounded-pill bg-warning-subtle text-warning">Warning</span>

<span className="badge rounded-pill bg-danger-subtle text-danger">Danger</span>

<span className="badge rounded-pill bg-dark-subtle text-dark">Dark</span>

<span className="badge rounded-pill bg-light-subtle text-body">Light</span>
`;

const RoundSoftBadgesExample = () => (
    <PrismCode
        code={roundSoftBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Soft Border Badges

const softBorderBadgesCode =
    `
<span className="badge bg-primary-subtle text-primary badge-border">Primary</span>

<span className="badge bg-secondary-subtle text-secondary badge-border">Secondary</span>

<span className="badge bg-success-subtle text-success badge-border">Success</span>

<span className="badge bg-danger-subtle text-danger badge-border">Danger</span>

<span className="badge bg-warning-subtle text-warning badge-border">Warning</span>

<span className="badge bg-info-subtle text-info badge-border">Info</span>

<span className="badge bg-dark-subtle text-dark badge-border">Dark</span>

<span className="badge bg-light-subtle text-body badge-border">Light</span>
`;

const SoftBorderBadgesExample = () => (
    <PrismCode
        code={softBorderBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Outline Pill Badges
const outlinePillBadgesCode =
    `
<span className="badge bg-body-secondary rounded-pill border border-primary text-primary">Primary</span>

<span className="badge bg-body-secondary rounded-pill border border-secondary text-secondary">Secondary</span>

<span className="badge bg-body-secondary rounded-pill border border-success text-success">Success</span>

<span className="badge bg-body-secondary rounded-pill border border-info text-info">Info</span>

<span className="badge bg-body-secondary rounded-pill border border-warning text-warning">Warning</span>

<span className="badge bg-body-secondary rounded-pill border border-danger text-danger">Danger</span>

<span className="badge bg-body-secondary rounded-pill border border-dark text-dark">Dark</span>

<span className="badge bg-body-secondary rounded-pill border border-light text-light text-body">Light</span>
`;

const OutlinePillBadgesExample = () => (
    <PrismCode
        code={outlinePillBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Button Position Badges
const buttonPositionBadgesCode =
`
<Button color='primary' className="position-relative">Mails 
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99
    <span className="visually-hidden">unread messages</span></span>
</Button>

<Button className="btn-light position-relative">Alerts 
<span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
</Button>

<Button color='primary' className="position-relative p-0 avatar-xs rounded">
    <span className="avatar-title bg-transparent">
        <i className="bx bxs-envelope"></i>
    </span>
    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
</Button>

<Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
    <span className="avatar-title bg-transparent text-reset">
        <i className="bx bxs-bell"></i>
    </span>
</Button>

<Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
    <span className="avatar-title bg-transparent text-reset">
        <i className="bx bx-menu"></i>
    </span>
    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
</Button>
`;

const ButtonPositionBadgesExample = () => (
    <PrismCode
        code={buttonPositionBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Badges With Button

const buttonBadgesCode =
    `
<Button color='primary'>
    Notifications <span className="badge bg-success ms-1">4</span>
</Button>
<Button color='success' className="btn-success">
    Messages <span className="badge bg-danger ms-1">2</span>
</Button>
<Button variant="outline-secondary">
    Draft <span className="badge bg-success ms-1">2</span>
</Button>
`;

const ButtonBadgesExample = () => (
    <PrismCode
        code={buttonBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Gradient Badges

const gradientBadgesCode =
    `
<Badge className="badge-gradient-primary">Primary</Badge>

<Badge className="badge-gradient-secondary">Secondary</Badge>

<Badge className="badge-gradient-success">Success</Badge>

<Badge className="badge-gradient-danger">Danger</Badge>

<Badge className="badge-gradient-warning">Warning</Badge>

<Badge className="badge-gradient-info">Info</Badge>

<Badge className="badge-gradient-dark">Dark</Badge>
`;

const GradientBadgesExample = () => (
    <PrismCode
        code={gradientBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export { DefaultBadgesExample, RoundedPillBadgesExample, LabelBadgesExample, HTMLBadgesExample, SoftBadgesExample, OutlineBadgesExample, RoundSoftBadgesExample, SoftBorderBadgesExample, OutlinePillBadgesExample, ButtonPositionBadgesExample, ButtonBadgesExample, GradientBadgesExample };