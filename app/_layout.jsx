import { Stack } from "expo-router";
import Provedor from "../components/contexts/questoesContext";
export default function Pilha() {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Provedor>
                <Stack.Screen name="questoes" />
                <Stack.Screen name="feedBack" />
            </Provedor>
        </Stack>
    )
}