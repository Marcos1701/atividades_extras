# Código atualizado

from machine import PWM, Pin
import neopixel
import time
import random
from machine import Pin, SoftI2C, ADC
from ssd1306 import SSD1306_I2C
import math

# Configuração do OLED
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
oled = SSD1306_I2C(128, 64, i2c)

joystick_button = Pin(22, Pin.IN, Pin.PULL_UP) 

# Número de LEDs na sua matriz 5x5
NUM_LEDS = 25

# Inicializar a matriz de NeoPixels no GPIO7
np = neopixel.NeoPixel(Pin(7), NUM_LEDS)

# Definindo a matriz de LEDs
LED_MATRIX = [
    [24, 23, 22, 21, 20],
    [15, 16, 17, 18, 19],
    [14, 13, 12, 11, 10],
    [5, 6, 7, 8, 9],
    [4, 3, 2, 1, 0]
]

# Inicializar ADC para os pinos VRx (GPIO26) e VRy (GPIO27)
adc_vrx = ADC(Pin(26))
adc_vry = ADC(Pin(27))

def map_value(value, in_min, in_max, out_min, out_max):
    return (value - in_min) * (out_max - out_min) // (in_max - in_min) + out_min

def update_oled(lines):
    oled.fill(0)
    for i, line in enumerate(lines):
        oled.text(line, 0, i * 8)
    oled.show()

# Configurando o LED RGB
led_r = PWM(Pin(12))
led_g = PWM(Pin(13))
led_b = PWM(Pin(11))

led_r.freq(1000)
led_g.freq(1000)
led_b.freq(1000)

# Configuração do NeoPixel
NUM_LEDS = 25
np = neopixel.NeoPixel(Pin(7), NUM_LEDS)

# Configuração dos botões
button_a = Pin(5, Pin.IN, Pin.PULL_UP)
button_b = Pin(6, Pin.IN, Pin.PULL_UP)

# definir cores para os LEDs
RED = (50, 0, 0)
GREEN = (0, 50, 0)
BLUE = (0, 0, 50)
YELLOW = (30, 30, 0)
MAGENTA = (30, 0, 30)
CYAN = (0, 30, 30)
WHITE = (25, 25, 25)
BLACK = (0, 0, 0)

# Configuração do Buzzer
buzzer = PWM(Pin(21))
buzzer.freq(50)  # Frequência inicial grave

def gradual_light_sound(duration=2):
    step_duration = duration / 100
    for i in range(101):
        duty_cycle = (i * 65535) // 200  # Calcular o ciclo de trabalho atual

        # Ajustar o LED para a intensidade atual
        led_r.duty_u16(duty_cycle)
        led_g.duty_u16(duty_cycle)
        led_b.duty_u16(duty_cycle)

        # Ajustar a frequência do buzzer
        buzzer.freq(50 + i * 2)  # Ajustar a frequência do buzzer
        
        # Ajustar o volume do buzzer
        buzzer.duty_u16(duty_cycle // 4)  # Reduzir o volume para 25% do máximo
        
        time.sleep(step_duration)

    # Desligar o LED e o buzzer no final
    led_r.duty_u16(0)
    led_g.duty_u16(0)
    led_b.duty_u16(0)
    buzzer.duty_u16(0)

def beep(freq=1000, duration=0.2):
    ''' Toca um beep com a frequência e duração especificadas '''
    buzzer.freq(freq)
    buzzer.duty_u16(5000)  # Intensidade média
    time.sleep(duration)
    buzzer.duty_u16(0)  # Desliga o buzzer

def play_melody(buzzer, melody, tempo):
    for note, duration in melody:
        if note == 0:
            time.sleep(duration / tempo)
        else:
            buzzer.freq(note)
            buzzer.duty_u16(5000)  # Intensidade média
            time.sleep(duration / tempo)
            buzzer.duty_u16(0)

# Exemplo de melodia "Barões da Pisadinha"
baraoes_pisadinha = [
    (370, 4), (440, 4), (329.63, 4), (493.88, 4),  # Intro
    (370, 4), (440, 4), (329.63, 4), (493.88, 4),  # Intro repetida
    (370, 4), (370, 4), (370, 4), (370, 4),        # Primeira Parte
    (440, 4), (440, 4), (440, 4), (440, 4),
    (329.63, 4), (329.63, 4), (329.63, 4), (329.63, 4),
    (493.88, 4), (493.88, 4), (493.88, 4), (493.88, 4),
    (370, 4), (370, 4), (370, 4), (370, 4),
    (440, 4), (440, 4), (440, 4), (440, 4),
    (329.63, 4), (329.63, 4), (329.63, 4), (329.63, 4),
    (493.88, 4), (493.88, 4), (493.88, 4), (493.88, 4),
    (440, 4), (440, 4), (440, 4), (440, 4),        # Refrão
    (329.63, 4), (329.63, 4), (329.63, 4), (329.63, 4),
    (493.88, 4), (493.88, 4), (493.88, 4), (493.88, 4),
    (370, 4), (370, 4), (370, 4), (370, 4),
    (440, 4), (440, 4), (440, 4), (440, 4),
    (329.63, 4), (329.63, 4), (329.63, 4), (329.63, 4),
    (493.88, 4), (493.88, 4), (493.88, 4), (493.88, 4)
]

# Adicione a chamada da função onde você deseja tocar a nova melodia
play_melody(buzzer, baraoes_pisadinha, 120)
