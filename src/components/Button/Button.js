import React, {Fragment, useMemo} from 'react';
import { Link } from 'react-router-dom';

import { InlineButton, RegularButton } from './Button.css';

function Button( {variant, children, ...props }) {
    const { to } = props;
    const Component = useMemo(() => {
        switch (variant) {
            case 'inline':
                return InlineButton
            case 'regular':
                return RegularButton
            
            default:
                return RegularButton
        }
    }, [variant]);

    const content = useMemo(() =>(
        <Component {...props}>
            {children}
        </Component>
    ), [props. children]);

    return to ? (
        <Link {...props}>
            {content}
        </Link>
    ) : (
        <Fragment>
            {content}
        </Fragment>
    )
};

export default Button;