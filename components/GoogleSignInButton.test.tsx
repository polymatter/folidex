import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import GoogleSignIn from './GoogleSignInButton';

interface Snapshot {
  children: Array<{ props: { source?: string } }>
}

describe("<GoogleSignIn>", () => {

  test("", () => {
    const { toJSON } = render(<GoogleSignIn />);

    const snapshot = toJSON() as Snapshot;
    // displays sign in with google image
    // TODO: Can not test for a particular image as require returns a number (see the snapshot). This test "works" but I'm not sure its meaningful so its commented out
    // expect(snapshot.children.find(c => c.props.source === require('../assets/images/SignInWithGoogle.png'))).not.toBeUndefined();

    expect(snapshot).toMatchSnapshot(); 
  })

})